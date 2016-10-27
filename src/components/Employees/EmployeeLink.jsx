import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { Link } from 'react-router';

import styles from './employeeLink.scss';

class EmployeeLink extends Component {

    render() {

        //if(!this.props.sys) return null;

        //let employee = this.props.entries.find(e => e.sys.id === this.props.id);
        //let image = employee.fields.image && this.props.assets.find(i => i.sys.id === employee.fields.image.sys.id);

        //let { sys: { id }, fields: { name, position }, assets: { image } } = this.props;
        let { id, name, position, summary, assets: { image } } = this.props;

        return (
            <div className={styles.employeeWrapper}>
                <div className={styles.employee}>
                    <Link to={`/ansatte/${id}`}>
                        {image && (
                            <div className={styles.imageWrapper}><img src={image.fields.file.url}/></div>
                        )}
                        <div className={styles.content}>
                            <h3 className={styles.title}>{name}</h3>
                            {position && position.map(p => ( <span className={styles.position}>{p}</span> ))}
                            {/*<div className={styles.bio}>
                                <p>{summary}</p>
                            </div>*/}
                        </div>
                    </Link>
                    {/*<ul className={styles.socialMedia}>
                        <li>
                            <a href="#" className={styles.facebook} data-tip data-for="facebook"></a>
                        </li>
                        <li>
                            <a href="#" className={styles.twitter} data-tip data-for="twitter"></a>
                        </li>
                        <li>
                            <a href="#" className={styles.instagram} data-tip data-for="instagram"></a>
                        </li>
                        <li>
                            <a href="#" className={styles.linkedin} data-tip data-for="linkedin"></a>
                        </li>
                    </ul>*/}
                </div>
            </div>
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

export default connect(mapStateToProps)(EmployeeLink);

// export default connect(
//         state => ({
//             entries: state.employeeEntries,
//             assets: state.employeeAssets
//         })
//     )(Employee)
