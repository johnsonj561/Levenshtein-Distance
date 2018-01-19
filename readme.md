### Levenshtein Distance (JavaScript)

The Levensthein distance between 2 strings is the sum of operations required to transform s1 into s2. It is commonly referred to as the edit distance between two strings.

Operations include:
- insert
- delete
- substitute

This implementation scores each operation equally, as 1 point. Some algorithms may choose to weight substitution as 2 points, as it technically includes a delete followed by an insert.

The edit distance calculation was implemented with Dynamic Programming to achieve quadratic complexity. Dynamic programming is the process of breaking a complex problem up into sub-problems, solving the sub-problems, and then combining the solutions of the sub-problems to achieve optimal solution. A matrix can often be used to store/recall solutions of sub-problems already completed.


