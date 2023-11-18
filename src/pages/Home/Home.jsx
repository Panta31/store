
import React from 'react';
import Layout from '../../components/Layout'
import HomeCategory from '../../components/HomeCategory';
import products from '../../utils/products.json';
import template from './Home.module.css';
class Home extends React.Component{
  constructor(){
    super();
    this.state={
      categories:[],
      categoyNames:[]
    };
  }

  componentDidMount(){
    const categories=Object.values(products);
    const categoyNames=Object.keys(products);
    this.setState({categories, categoyNames});
  
  }


  render(){
    return (
    
       <Layout>

          <div >

              <div className={template.homeMod} >
                {
                    this.state.categories.map((cat, index)=>{
  
                      return(
                        <HomeCategory 
                          image={cat.image}
                          description={cat.description}
                          title={cat.name}
                          // eslint-disable-next-line no-undef
                          routeName={this.state.categoyNames[index]}
                        />
                    )
                    })
                }                  
              </div>
          </div>      
        </Layout>
        
    
    )
  }
}

export default Home;