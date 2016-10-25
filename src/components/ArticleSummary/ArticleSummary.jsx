import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { values } from 'lodash';
import marked from 'marked';

import styles from './_articleSummary.scss';

class ArticleSummary extends Component {

    render() {
        let { article, assets, index } = this.props;
        let isEven = index % 2 !== 0;

        if(!article) return null;

        const articleClass = isEven ? ` ${styles.even} ${styles.articleSummary}` : `${styles.odd} ${styles.articleSummary}`;

        return (
            <article className={articleClass} >
                {/*isEven && assets.image && (
                    <div className={styles.asset}>
                        <div className={styles.imageWrapper} style={{backgroundImage: `url(${assets.image.fields.file.url})`}}>
                            <img src={assets.image.fields.file.url} alt={assets.image.fields.file.fileName}/>
                        </div>
                    </div>
                )*/}
                <div className={styles.asset}>
                    <div className={styles.imageWrapper} style={{backgroundImage: `url(${assets.image.fields.file.url})`}}>
                        <img src={assets.image.fields.file.url} alt={assets.image.fields.file.fileName}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentWrapper}>
                        <h2 className="heading-medium">{article.fields.title}</h2>
                        <p className="excerpt">{article.fields.summary}</p>
                        <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(article.fields.body)}} />
                        <Link to={`/artikler/${article.sys.id}`} className="button button--winona" data-text="Les mer">
                            <span>Les mer</span>
                        </Link>
                    </div>
                </div>
                {/*!isEven && assets.image && (
                    <div className={styles.asset}>
                        <div className={styles.imageWrapper} style={{backgroundImage: `url(${assets.image.fields.file.url})`}}>
                            <img src={assets.image.fields.file.url} alt={assets.image.fields.file.fileName}/>
                        </div>
                    </div>
                )*/}
            </article>
        );
    }
}

ArticleSummary.propTypes = {
    article: PropTypes.object,
    assets: PropTypes.object,
    index: PropTypes.number
}

function mapStateToProps(state, props) {
    const assets = {
        image: props.article && props.article.fields.image && values(state.assets).find(image => image.sys.id === props.article.fields.image.sys.id)
    }

    return {
        assets: assets
    }
}

export default connect(mapStateToProps)(ArticleSummary);
