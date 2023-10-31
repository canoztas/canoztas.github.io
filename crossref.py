import requests
import pandas as pd
from openpyxl import load_workbook
import os
import argparse
 
 
# Initialize parser
parser = argparse.ArgumentParser()
parser.add_argument("-p", "--Page", help = "page")
 
# Read arguments from command line
args = parser.parse_args()

PAGE = args.Page


response = requests.get('https://catalog.hifi-filter.com/api/cross-reference/brand?p='+str(PAGE))

brands = response.json()
print("Get page " + str(PAGE))
main_df = pd.DataFrame(columns=['name','reference','brand','family','attributes','gencode'])
main_df.to_excel('crossref'+str(PAGE)+'.xlsx',index=True,startrow=0)
for b in brands["results"]:
    if b['id']=='f865c8b7-d2c2-41ce-896b-bc4d3a31a4e0':
        continue
    iterator=1
    while True:
        response = requests.get('https://catalog.hifi-filter.com/api/cross-reference/brand/'+b['id']+'/reference?p='+str(iterator))
        cr = response.json()
        print("Get brand " + b['name'])
        iterator = iterator + 1
        if cr["results"]==[]:
            break

       
        for c in cr["results"]:

            response = requests.get('https://catalog.hifi-filter.com/api/cross-reference/'+c['id'])
            product = response.json()

            df = pd.DataFrame(columns=['name','reference','brand','family','attributes','gencode'])
                
            df = df._append({'name':product['products'][0]['number'] ,'reference':product['products'][0]['reference'],'brand':product['brand']['name'],'family':product['products'][0]['family'] ,'attributes':product['products'][0]['attributes'],'gencode':product['products'][0]['gencode']},ignore_index=True)

            with pd.ExcelWriter('crossref'+str(PAGE)+'.xlsx',mode="a",engine="openpyxl",if_sheet_exists="overlay") as writer:
                df.to_excel(writer, sheet_name="Sheet1",header=None, startrow=writer.sheets["Sheet1"].max_row,index=False)


