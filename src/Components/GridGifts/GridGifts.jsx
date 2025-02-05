import PropTypes from "prop-types"

export const GridGifts = ({category}) => {
    return (
        <>
        <h2>{category}</h2>
        <p>Categoria</p>
        </>
    )
}


GridGifts.propTypes = {
    category: PropTypes.string
}