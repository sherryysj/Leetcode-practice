# solution 1: using 2 Hash Map
class Solution1:
    def romanToInt(self, s: str) -> int:
        num = 0
        dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        charCanBeMinus = {
            'C': ['M', 'D'],
            'X': ['C', 'L'],
            'I': ['V', 'X'],
        }
        index = 0
        while index < len(s):
            if s[index] in charCanBeMinus and index < len(s) - 1 and s[index + 1] in charCanBeMinus.get(s[index]):
                num += dict.get(s[index + 1]) - dict.get(s[index])
                index += 2
            else:
                num += dict.get(s[index])
                index += 1
        return num


# solution 2: using 1 Hash Map
class Solution2:
    def romanToInt(self, s: str) -> int:
        num = 0
        dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        index = 0
        while index < len(s):
            if index < len(s) - 1 and dict.get(s[index]) < dict.get(s[index + 1]):
                num += dict.get(s[index + 1]) - dict.get(s[index])
                index += 2
            else:
                num += dict.get(s[index])
                index += 1
        return num
