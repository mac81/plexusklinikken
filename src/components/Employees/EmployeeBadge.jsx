import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { Link } from 'react-router';

import styles from './employeeBadge.scss';

class EmployeeBadge extends Component {

    render() {

        //if(!this.props.sys) return null;

        //let employee = this.props.entries.find(e => e.sys.id === this.props.id);
        //let image = employee.fields.image && this.props.assets.find(i => i.sys.id === employee.fields.image.sys.id);

        //let { sys: { id }, fields: { name, position }, assets: { image } } = this.props;
        let { id, name, position, assets: { image } } = this.props;

        return (

            <li className={styles.employee}>
                <Link to={`ansatte/${id}`}>
                    {image && (
                        <div className={styles.imageWrapper}>
                            <img src={image.fields.file.url}/>
                        </div>
                    )}
                    <div className={styles.content}>
                        <h3 className={styles.title}>{name}</h3>
                        <span className={styles.position}>
                            {position && position.map(p => ( <span>{p}</span> ))}
                        </span>
                    </div>
                </Link>
            </li>
        );
    }
}

function mapStateToProps(state, props) {
    const assets = {
        image: state.assets && props.image && values(state.assets).find(image => image.sys.id === props.image.sys.id)
    }

    return {
        assets: assets
    }
}

export default connect(mapStateToProps)(EmployeeBadge);
