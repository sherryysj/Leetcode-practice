// solution 1 - for loop: 
//   hard search each char of string s in string t
//   from the former char's index,
//   once a char is not found, return false， else return true
class Solution {
    public boolean isSubsequence(String s, String t) {
        int startSearchIndex = 0;
        for (int i = 0; i < s.length(); i++) {
            int foundIndex = t.indexOf(s.charAt(i), startSearchIndex);
            if (foundIndex == -1) {
                return false;
            } else {
                startSearchIndex = foundIndex + 1;
            }
        }
        return true;
    }
}

// solution 2: two pointers:
//   with two pointer indexes, 
//   for each char in string t, compare with current pointer index of string s, 
//   if match, pointer index move to next
//   whether match or not, move pointer index of string t to next
//   end loop while one of pointer index out of string length
//   check whether indexS is equal to the length of stringS
//   if yes, it means all chars in string s are found in sequence in string t
class Solution2 {
    public boolean isSubsequence(String s, String t) {
        int lengthS = s.length();
        int lengthT = t.length();
        int indexS = 0;
        int indexT = 0;
        while (indexS < lengthS && indexT < lengthT) {
            if (s.charAt(indexS) == t.charAt(indexT)) {
                indexS += 1;
            }
            indexT += 1;
        }
        return indexS == lengthS;
    }
}