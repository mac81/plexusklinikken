import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { values } from 'lodash';

import { Text } from '../';

import styles from './_articleBlock.scss';

class ArticleBlock extends Component {

    render() {
        let { article, assets, index } = this.props;
        let isEven = index % 2 !== 0;

        if(!article) return null;

        const articleClass = isEven ? ` ${styles.even} ${styles.articleBlock}` : `${styles.odd} ${styles.articleBlock}`;

        return (
            <article className={articleClass}>
                <div className={styles.imageWrapper}>
                    <img src={assets.image.fields.file.url} alt={assets.image.fields.file.fileName}/>
                </div>
                <div className={styles.content}>
                    <h2 className="heading-medium">{article.fields.title}</h2>
                    <p className="excerpt">{article.fields.summary}</p>
                    <Text>{article.fields.body}</Text>
                </div>
            </article>
        );
    }
}

ArticleBlock.propTypes = {
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

export default connect(mapStateToProps)(ArticleBlock);
