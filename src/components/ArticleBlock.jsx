import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { Link } from 'react-router';

import { Button } from '.';

import styles from '../scss/_blocks.scss';

class ArticleBlock extends Component {

    render() {
        //let { article, assets: { image } } = this.props;
        let { sys: { id }, fields: { title, summary}, assets: { image } } = this.props;

        //let { article, assets, index } = this.props;
        let className = image ? 'block block-image block-' + this.props.index : 'block block-' + this.props.index;

        //if(!article) return null;

        return (
            <Link to={`/artikler/${id}`} className={className}>
                <div>
                    <h2 className="heading-medium">{title}</h2>
                    <p className="excerpt">{summary}</p>
                    <Button>Les mer</Button>
                </div>
                {image && (
                    <div className={styles.imageWrapper}>
                        <img src={image.fields.file.url} alt={image.fields.file.fileName}/>
                    </div>
                )}
            </Link>

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
        image: state.assets && props.fields.image && values(state.assets).find(image => image.sys.id === props.fields.image.sys.id)
    }

    return {
        assets: assets
    }
}

export default connect(mapStateToProps)(ArticleBlock);
