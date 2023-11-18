import React, { Component } from 'react'
import produse from '../utils/products.json';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';
class Categori extends Component {
    constructor(){
        super();
        this.state={
            category:[]
        }


    }
 
    componentDidMount(){
        const routeParam=this.props.match.params.categoryName;
        this.setState({category:produse[routeParam].items})
    }
  render() {
    
    console.log(this.props)

    return (
     <div>
        <Layout>
            <ProductList product={this.state.category} />    
        </Layout>
        

    </div>
    )
  }
}

export default Categori;