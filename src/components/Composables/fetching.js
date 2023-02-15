
export function fetching(ex, co) {
    fetch("http://localhost:3000/" + ex)
    .then((res) => res.json())
    .then(data => { 
        co.value = data
    })
}