function RenderList() {
    let fruits = ["banan", "apple", "kiwi"]


    return (

        <div>
            {
                fruits.map((value, index) => <li key={index}>{value}</li>)
            }
        </div>
    )
}

export { RenderList }