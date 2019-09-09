import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify, truncate } from '../../common/common';
import ReactHtmlParser from 'react-html-parser';

console.log("Recipe works!");

export default (props) => {  
    
    console.log(props);

    return (
        <React.Fragment>
        <div className="recipes layout-recipes">
            <h1 className="mb-0">{ props.title }</h1>
        </div>
        <div className="recipe-recipe">
            <div className="recipe-recipe_ingredients">
                <span>ingredients</span>
                <p>ingredient 1</p>
                <p>ingredient 2</p>
                <p>ingredient 3</p>
                <p>ingredient 4</p>           
            </div>
            <div className="recipe-recipe_method">
                <span>method</span>
                <ol>
                    <li>Step one</li>
                    <li>Step two</li>
                    <li>Step three</li>
                    <li>Step four</li>    
                </ol>
            </div>
        </div>
        <br/>
        <hr/>
        <Link className="zwart" to={`/books/${props.bookId}`}>
        <div className="recipe-box">
            <div className="recipe-box_image">
                <img src={`../public/img/books/${props.bookId}_title.jpg`} alt=""/>
            </div>
            <div className="recipe-box_credits">

            {props.books
                .filter(b => b.id === props.bookId)
                .map(book => {
                const truncatetext = truncate(book.content);
                const parsedBookContent = ReactHtmlParser(truncatetext);
                // if (props.bookId === book.id )
                return (
                <React.Fragment key={book.index}>
                <h6>{ book.title }</h6>    
                <p>{ book.author }</p>     
                { parsedBookContent } <span>Read more ></span>    
                </React.Fragment>
                )
            })
            }
            </div>
        </div>
        </Link>
        </React.Fragment>
    )

}

// function mapStateToProps(state) {  
//     return {
//       recipes: state.recipes,
//     }
// }
  
// export default withRouter(connect(mapStateToProps)(Recipe))