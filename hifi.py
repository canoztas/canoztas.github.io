import requests
import pandas as pd
from openpyxl import load_workbook
import os

PAGE = 1
response = requests.get('https://catalog.hifi-filter.com/api/application/brand?p='+str(PAGE))
brands = response.json()
print("Get page " + str(PAGE))

for b in brands["results"]:
    if b['id']=='f865c8b7-d2c2-41ce-896b-bc4d3a31a4e0':
        continue

    response = requests.get('https://catalog.hifi-filter.com/api/application/model/public-by-brand/'+b['id'])
    models = response.json()
    print("Get brand " + b['label'])

    main_df = pd.DataFrame(columns=['brand','modelname','productfamily','designation','type','reference'])
    main_df.to_excel('hifi'+str(PAGE)+'.xlsx',index=True,startrow=-1)
    for m in models["results"]:
        response = requests.get('https://catalog.hifi-filter.com/api/application/version/public-by-model/'+m['id'])
        versions = response.json()
        for v in versions:
    
            final_response = requests.get('https://catalog.hifi-filter.com/api/application/version/'+str(v['id'])+'/filter-links')
            filters = final_response.json()

            df = pd.DataFrame(columns=['brand','modelname','productfamily','designation','type','reference'])
            for f in filters:
                df = df._append({'brand':b['label'],'modelname':m['label'],'productfamily':f['products'][0]['family'],'designation':f['products'][0]['designation'],'type':f['type']['label'],'reference':f['reference']},ignore_index=True)

            with pd.ExcelWriter('hifi'+str(PAGE)+'.xlsx',mode="a",engine="openpyxl",if_sheet_exists="overlay") as writer:
                df.to_excel(writer, sheet_name="Sheet1",header=None, startrow=writer.sheets["Sheet1"].max_row,index=False)


