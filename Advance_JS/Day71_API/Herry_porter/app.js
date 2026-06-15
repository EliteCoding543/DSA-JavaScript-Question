const container = document.getElementById("container");

const apiKey = "https://hp-api.onrender.com/api/characters";

fetch(apiKey).then((res) => {
    return res.json()
})

.then((data) => {
      for(let item of data){
        console.log(item)

        const card = document.createElement("card");

        const cardImg = document.createElement("img");
        cardImg.src = item.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAbFBMVEX///8AAADm5uZCQkL8/PwEBATt7e35+fni4uJoaGjW1tY7OzvExMSOjo4zMzNSUlJ8fHxXV1dcXFyXl5fKysoZGRm4uLiysrKrq6tMTExhYWF0dHRtbW1HR0fQ0NCDg4MjIyMSEhIrKyuioqKbKfMbAAADMklEQVR4nO2ZAW+qMBCAW3a0UCkyEdzQobz9///4WtCnUaQzUI633JcsS+oWv9xd22vLGEEQBEEQBEEQBEEQBEEQ/w2ALUBMAphEiu2HzrJMf2yFHVhGasGWmDp+Nryj+TxGjElsLXaOUP3eWoU8DDu/TY3t1QJM5icrdvHi9vcpX0DggIkDf8DoxQJ/ORHVo1qb241A9TKBkRse9rjZwQo3rcBy3ufWTYocV21b9IhdOG0RtzBgX0/F7LxdYU4H1ZvQi1vIFZ6a3D93a9lLtMBFq0EzzlcRlhpL+ifpDQmOmMnWt9MNaRkxbplLjWdobrHDzOyqaG6VM24VjpuRi51uSHFjtt5cINWbIXe64W33i13fWLsvDLsh7gvgKrgMtQ/hg2lVmP3bqmu/n6UUS6x1q09P5UJ+Qj2lAtMDOdUSse+11w09p9MzB8A+oQbV7Zn+hhj3fNoi9o+lZlQPCzjX2/uQ5tEul2wZ91wqLnh3mA/bqVHEiAese0AdP//F7EsrWEjQumtLEKrM9/tMl0rAeWwR3F+hwlLuVInfTDsH2uJbUrndu8CS3o6kiNS23O12ZaIiIZfg1gmIJD98XS8wm7e9TsT1Yzy1oKz67lWLahcg2tnvrXV6bnIfSXWNJWdfsbLm3BHd90jdWJMpDDfznYEOn0TsOhrqwE7iuQ0T14VqZ7hK2LyZBSYy533DJdvZzM159P4DtbbTND/vEZstdJKVJ6fXLX8SNlPNSVYXPZNzKHzznaLL4icJvXELeVP6j5ttMqKGv+bW/nXEZsirSl/Susilyn/nJKuXau0qt5HeTxG6b5Nyq5n/0b4XksHH3GGKrV83uX5xFtyy9vuA/z1CjfNvb16mkoN0lFsa+Co5gB88dgyTe6s4EO62aIiQr/y1JB+v7gd3aqGtOE+RW48Km2XtS60erca5r4Zk7EyweHkYBCbdT7luYj/rbzRucetIfbwMgn0tnQAfL6p24R0fNj8FN/Q69AoHL27jNoULHt4tzZI5iRrnPtxg1IbVYTtmD4sIiCmCZph+uwcm0rcpSKd3kwyCSYjQL4IJgiAIgiAIgiAIgiAIgiB+JX8BXW0g5YBc0KIAAAAASUVORK5CYII="

        const name = document.createElement("h3")
        name.innerText = item.name

        card.append(cardImg, name)

        container.append(card)

      }
})