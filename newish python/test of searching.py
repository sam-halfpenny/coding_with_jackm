

import os,shutil,time

txtnm=[]
pynm=[]
jpgnm=[]
pngnm=[]

pathi=input('input path name')
path = os.path.join(r"",pathi)

 

list = []
while True:
    
    for (root, dirs, file) in os.walk(path):
        for f in file:
            if '.txt' in f:
                movingtxt=''
                time.sleep(0.2)

                txtnm.append(f)
                movingtxt=txtnm[0]

                original = os.path.join(r"C:\Users\The Marchants\Documents\0 Jacks\python text test",movingtxt)
                target = r'C:\Users\The Marchants\Documents\0 Jacks\python text test\text sorted files'
                print(movingtxt)
                shutil.move(original,target)
                txtnm.remove(movingtxt)
                movingtxt=''
            if '.png' in f:
                movingpng=''
                time.sleep(0.2)

                pngnm.append(f)
                movingpng=pngnm[0]

                original = os.path.join(r"C:\Users\The Marchants\Documents\0 Jacks\python text test",movingpng)
                target = r'C:\Users\The Marchants\Documents\0 Jacks\python text test\image sorted files'
                print(movingpng)
                shutil.move(original,target)
                pngnm.remove(movingpng)  
                movingpng=''
            if '.jpg' in f:
                movingjpg=''
                time.sleep(0.2)

                jpgnm.append(f)
                movingjpg=jpgnm[0]

                original = os.path.join(r"C:\Users\The Marchants\Documents\0 Jacks\python text test",movingjpg)
                target = r'C:\Users\The Marchants\Documents\0 Jacks\python text test\image sorted files'
                print(movingjpg)
                shutil.move(original,target)
                jpgnm.remove(movingjpg)
                movingjpg=''
                                
            if '.py' in f:
                movingpy=''
                time.sleep(0.2)

                pynm.append(f)
                movingpy=pynm[0]

                original = os.path.join(r"C:\Users\The Marchants\Documents\0 Jacks\python text test",movingpy)
                target = r'C:\Users\The Marchants\Documents\0 Jacks\python text test\python sorted files'
                print(movingpy)
                shutil.move(original,target)
                pynm.remove(movingpy)
                movingpy=''

        
        
        
