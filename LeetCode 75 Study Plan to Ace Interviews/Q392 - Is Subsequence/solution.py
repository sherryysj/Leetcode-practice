# solution 1 - for loop:
#   hard search each char of string s in string t
#   from the former char's index,
#   once a char is not found, return False， else return True
class Solution1:
    def isSubsequence(self, s: str, t: str) -> bool:
        startSearchIndex = 0
        for char in s:
            foundIndex = t.find(char, startSearchIndex)
            if (foundIndex == -1):
                return False
            else:
                startSearchIndex = foundIndex + 1
        return True


# solution 2 - two pointers:
#   with two pointer indexes,
#   for each char in string t, compare with current pointer index of string s,
#   if match, pointer index move to next
#   whether match or not, move pointer index of string t to next
#   end loop which one of pointer index out of string length
#   check whether indexS is equal to the length of stringS
#   if yes, it means all chars in string s are found in sequence in string t
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        lengthS = len(s)
        lengthT = len(t)
        indexS = 0
        indexT = 0
        while indexS < lengthS and indexT < lengthT:
            if (s[indexS] == t[indexT]):
                indexS += 1
            indexT += 1
        return indexS == lengthS
