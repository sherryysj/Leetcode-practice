public class Solution {
    public bool IsIsomorphic(string s, string t) {
        // solution 1: using hash map by Dictionary
        if (s.Length != t.Length) {
            return false;
        }
        Dictionary<char, char> charMap = new Dictionary<char, char>();
        for (int i = 0; i < s.Length; i++) {
            if (charMap.ContainsKey(s[i])) {
                if(t[i] != charMap[s[i]]){
                    return false;  
                }
            } else if (charMap.ContainsValue(t[i])) {
                return false;
            } else {
                charMap.Add(s[i], t[i]);
            }     
        }
        return true;
    }
}