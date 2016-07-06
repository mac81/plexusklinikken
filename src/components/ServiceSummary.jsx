import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { Link } from 'react-router';

import styles from '../scss/_button.scss';

class ServiceSummary extends Component {

    render() {
        let { fields: { slug, name, summary }, assets: { image } } = this.props;
        return (
            <li>
                <Link to={`/tjenester/${slug}`}>
                    {image.fields.file.url && (
                        <div className={styles.imageWrapper}>
                            <img src={image.fields.file.url} alt={image.fields.file.fileName}/>
                        </div>
                    )}
                    <div>
                        <h3 className="heading-small">{name}</h3>
                        <p>{summary}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

ServiceSummary.propTypes = {
    fields: PropTypes.object,
    assets: PropTypes.object
}

function mapStateToProps(state, props) {
    //const service = state[state.activePage].services && state[state.activePage].services.find(service => service.sys.id === props.sys.id);
    const assets = {
        image: state.assets && values(state.assets).find(image => image.sys.id === props.fields.image.sys.id)
    }

    return {
        assets: assets
    }
}

export default connect(mapStateToProps)(ServiceSummary);
