export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const item of haystack) {
        if (needle === item) {
            return true;
        }
    }

    return false;
}
