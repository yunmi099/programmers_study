def solution(spell, dic):
    for d in dic:
        if not set(spell) - set(d):
            return 1
    return 2

print(solution(["p","o","s"], ["sod", "eocd", "qixm", "adio", "sop"]))