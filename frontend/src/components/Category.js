function Category (props) {
    return (
        <div>
            <div className="categoryname">
                {props.name}
            </div>
            <div className="categorytype">
                {props.type}
            </div>
        </div>
    )

}

export default Category;