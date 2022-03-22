
from unittest import result


a = []
rank = 0
for i in range(3):
    kor = int(input("국어 성적 입력 : "))
    eng= int(input("영어 성적 입력 : "))
    mat = int(input("수학 성적 입력 : "))
    a.append([kor,eng,mat,(kor+eng+mat)/3])

print("국어    영어    수학    평균    석차")

for i in range(0,3):
    for j in range(0,3):
        if(a[i][3]<=a[j][3]):
            rank += 1
    a[i].insert(5,rank)
    rank=0

for i in range(5):
    for j in range(5):
        print(a[i][j], end = '\t')
    print("\n")

print("끝!")
print("끝!")