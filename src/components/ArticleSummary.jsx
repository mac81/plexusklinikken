import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { values } from 'lodash';

import styles from '../scss/_articleSummary.scss';

class ArticleSummary extends Component {

    render() {
        let { article, assets, index } = this.props;
        let isEven = index % 2 !== 0;

        if(!article) return null;

        return (
            <article className={styles.articleSummary}>
                {!isEven && assets.image && (
                    <div className={styles.imageWrapper}>
                        <img src={assets.image.fields.file.url} alt={assets.image.fields.file.fileName}/>
                    </div>
                )}
                <div>
                    <h2 className="heading-medium">{article.fields.title}</h2>
                    <p className="excerpt">{article.fields.summary}</p>
                    <Link to={`/artikler/${article.sys.id}`} className="button button--winona" data-text="Les mer">
                        <span>Les mer</span>
                    </Link>
                </div>
                {isEven && assets.image && (
                    <div className={styles.imageWrapper}>
                        <img src={assets.image.fields.file.url} alt={assets.image.fields.file.fileName}/>
                    </div>
                )}
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
