import Home from '../components/Home';
import { connect } from 'react-redux';
import { addToCart } from '../service/actions/actions';

const mapStateToPros = state => ({

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(
    mapStateToPros,
    mapDispatchToProps
)(Home);
