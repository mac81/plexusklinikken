import React, { Component } from 'react';
import Link from 'next/link';
// import Scroll from 'react-scroll';

// Components
//import { Button } from '../';

// Styles
//import styles from './_pageIntro.scss';

class ArticleSummary extends Component {

  render() {
    const { sys: {id}, fields: {title, summary, image}} = this.props.article;
    return (
      <div>
        {image && (
          <img src={image.fields.file.url} alt={image.fields.file.fileName}/>
        )}

        <h2 className="heading-medium">{title}</h2>
        <p className="excerpt">{summary}</p>
        <Link as={`/artikler/${id}`} href={{pathname: '/article', query: {id: id}}}>
          <a>{title}</a>
        </Link>
        {/*<Link href={`/artikler/${id}`} className="button button--winona inverted" data-text="Les mer"><a>Les mer</a></Link>*/}
      </div>
    );
  }
}

export default ArticleSummary;