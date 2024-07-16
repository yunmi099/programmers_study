def solution(m, n, puddles):
    map = [[0 for _ in range(m)] for _ in range(n)]
    for x, y in puddles:
        map[y-1][x-1] = -1
    map[0][0] = 1
    return dfs(m-1, n-1, map)

def dfs(x, y, map):
    if x < 0 or y < 0 or map[y][x] == -1:
        return 0
        
    if map[y][x] == 0:
        map[y][x] = dfs(x-1, y, map) + dfs(x, y-1, map)

    return map[y][x] % 1000000007