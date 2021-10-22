import "../css/Category.css"

function Category (props) {
    return (
        <div className="category">
            <div className="categoryname">
                Nimi: {props.name}
            </div>
            <div className="categorytype">
                Tüüp: {props.category}
            </div>
        </div>
    )

}

export default Category;