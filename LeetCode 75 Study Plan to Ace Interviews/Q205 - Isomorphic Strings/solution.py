# solution 1 - hash map by dict: 40ms, 15.3MB
class Solution1:
    def isIsomorphic(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
        charMap = {}
        for index in range(len(s)):
            if s[index] in charMap:
                if (t[index] != charMap.get(s[index])):
                    return False
            elif t[index] in charMap.values():
                return False
            else:
                charMap[s[index]] = t[index]
        return True


# solution 2 - set and zip: 32ms, 15.4MB
# comparing the length of unique char in s and t
# as well as the length of unique pair in dict paired by s, t
class Solution2:
    def isIsomorphic(self, s: str, t: str) -> bool:
        numOfUniqueCharsInS = len(set(s))
        numOfUniqueCharsInT = len(set(t))
        stDict = zip(s, t)
        numOfUniqueCharsInStDict = len(set(zip(s, t)))
        return numOfUniqueCharsInS == numOfUniqueCharsInT == numOfUniqueCharsInStDict
