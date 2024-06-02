async function fetchQuestions() {
    try {
        const BASEURL = import.meta?.env.VITE_REACT_APP_BASE_URL
        console.log(import.meta.env)

        if (!BASEURL.length) return null;


        const res = await fetch(
            BASEURL + "?amount=10&difficulty=hard&type=boolean"
        );
        const data = await res?.json();
        if (data?.results) return { "result": data?.results, "error": null };
    } catch (err) {
        return { "result": null, "error": err?.message };
    }
}

export default fetchQuestions;