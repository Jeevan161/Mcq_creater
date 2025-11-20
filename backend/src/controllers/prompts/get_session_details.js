// src/prompts/get_session_details_prompt.js

export function get_session_details_prompt(details) {
  return `
I want you to act as a Technical Instructional Designer.

Your tasks are divided into two parts:

------------------------------------------------------------
TASK 1: Generate Technical Topics & Subtopics
------------------------------------------------------------

Use the PPT/session content provided to extract ONLY technical topics and subtopics.

Guidelines:

1. Format as bullet points.
2. Each main topic must contain its related subtopics.
3. Group similar subtopics under the correct topic.
4. Use ONLY terminology that appears in the session.
   - Do NOT introduce any external terms.
   - If a term such as 'separation of concerns' is not present, do not include it.
5. Do NOT include:
   - session summary
   - reading material details
   - recap, key takeaways
   - interview questions
   - examples unless they are explicitly part of the session
6. Use the session content exactly as given.
   - Do NOT infer, assume, or hallucinate concepts.
7. Maintain the natural flow of the session when grouping topics.

Format strictly like this:

* <Topic 1>
    * <Subtopic 1.1>
    * <Subtopic 1.2>
* <Topic 2>
    * <Subtopic 2.1>
    * <Subtopic 2.2>

End the list with \`--END--\`.

------------------------------------------------------------
TASK 2: Generate Learning Outcomes
------------------------------------------------------------

Based on the same session content:

1. Learning outcomes must be:
   - actionable
   - measurable
   - strictly derived from the session content
   - written in snake_case
   - 1 sentence each
2. Avoid generic outcomes like "understand" or "learn".
   Use verbs like:
   - identify
   - apply
   - explain
   - implement
   - interpret
3. Do NOT include content that is not explicitly part of the session.
4. Outcomes must help in generating MCQs and coding questions based only on the session knowledge.

5. Generate as many unique learning outcomes as the session content supports.
6. The final list must be a round number, i.e., one of: **10, 15, 20, or 25**.
7. Choose the number based on the depth of concepts:
   - Use **10** for simpler sessions,
   - Use **15** for moderately detailed ones,
   - Use **20** or **25** when the session is very rich.
8. If there are fewer than 15 natural outcomes, expand them in fine-grained ways — but do **not** introduce any new technical topics.
9. Do **not** produce counts like **11, 12, 16, or 17** — only multiples of 5.

------------------------------------------------------------
SESSION CONTENT:
${details}
`;
}
