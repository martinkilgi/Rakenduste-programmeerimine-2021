function Category (props) {
    return (
        <div>
            <div className="categoryname">
                {props.name}
            </div>
            <div className="categorytype">
                {props.category}
            </div>
        </div>
    )

}

export default Category;