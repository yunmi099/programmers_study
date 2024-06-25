def inclination(cordinate1, cordinate2):
    [x1, y1] = cordinate1
    [x2, y2] = cordinate2
    return (y2-y1)/(x2-x1)

def solution(coords):
    if (inclination(coords[0], coords[1]) == inclination(coords[2], coords[3]) or
       inclination(coords[0], coords[2]) == inclination(coords[1], coords[3]) or 
       inclination(coords[0], coords[3]) == inclination(coords[1], coords[2])):
        return 1
    else: 
        return 0

print(solution([[1, 4], [1, 4], [3, 8], [11, 6]]))
print(solution([[3, 5], [4, 1], [2, 4], [5, 10]]))