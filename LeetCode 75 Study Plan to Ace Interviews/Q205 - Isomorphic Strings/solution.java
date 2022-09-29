class Solution {
    public boolean isIsomorphic(String s, String t) {
        // solution 1: using hash map by Dictionary
        if (s.length() != t.length()) {
            return false;
        }
        HashMap<Character, Character> charMap = new HashMap<Character, Character>();
        for (int i = 0; i < s.length(); i++) {
            if (charMap.keySet().contains(s.charAt(i))) {
                if (t.charAt(i) != charMap.get(s.charAt(i))) {
                    return false;  
                }
            } else if (charMap.values().contains(t.charAt(i))) {
                return false;
            } else {
                charMap.put(s.charAt(i), t.charAt(i));
            }     
        }
        return true;
    }
}