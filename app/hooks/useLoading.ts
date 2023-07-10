import { useState } from "react";

export function useLoading() {
    const [isLoading, setLoading] = useState<boolean>(false);
    function startLoading() {
        setLoading(true);
    }
    function endLoading() {
        setLoading(false);
    }

    return { isLoading, startLoading, endLoading };
}
