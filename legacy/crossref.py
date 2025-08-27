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
        print("Get brand " + b['name'] + "page" + str(iterator))
        iterator = iterator + 1
        if cr["results"]==[]:
            break

       
        for c in cr["results"]:

            response = requests.get('https://catalog.hifi-filter.com/api/cross-reference/'+c['id'])
            product = response.json()

            df = pd.DataFrame(columns=['name','reference','brand','family','attributes','gencode'])
            


            try:
                prod_name = product['reference']
            except:
                prod_name = 'NULL'

            try:
                ref_name = product['products'][0]['reference']
            except:
                ref_name = 'NULL'

            try:
                brand_name = product['brand']['name']
            except:
                brand_name = 'NULL'

            try:
                family_name = product['products'][0]['family']
            except:
                family_name = 'NULL'

            try:
                attr = product['products'][0]['attributes']
            except:
                attr = 'NULL'

            try:
                gnc = product['products'][0]['gencode']
            except:
                gnc = 'NULL'



            df = df._append({'name':prod_name ,'reference':ref_name,'brand':brand_name,'family':family_name ,'attributes':attr,'gencode':gnc},ignore_index=True)

            with pd.ExcelWriter('crossref'+str(PAGE)+'.xlsx',mode="a",engine="openpyxl",if_sheet_exists="overlay") as writer:
                df.to_excel(writer, sheet_name="Sheet1",header=None, startrow=writer.sheets["Sheet1"].max_row,index=False)


