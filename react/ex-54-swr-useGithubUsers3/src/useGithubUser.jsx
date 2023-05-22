import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser(username) {
    const { data , mutate } = useSWR(username ?`https://api.github.com/users/${username}`: null, fetcher)

    function handleRefresh() {
        mutate()
    }

    return {
       data,
       onRefresh : handleRefresh
    }
}