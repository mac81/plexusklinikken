import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import marked from 'marked';
import cn from 'classnames';

import Layout from '../components/Layout';

import styles from '../scss/_employee.scss';

class Employee extends Component {

    render() {
        let { employee, assets: { image } } = this.props;

        if(!employee) return <div>No employee found</div>;

        let id = 'employee-' + employee.sys.id;
        let wrapperClass = cn(styles.imageWrapper, id);

        return (
            <Layout location={this.props.location}>
                <section className="collapsed">
                    {image && (
                        <div className="col-wrapper">
                            <div className="col-1">
                                <img className={styles.image} src={image.fields.file.url} alt={image.fields.file.fileName}/>
                            </div>
                            <div className="col-2">
                                <div className={styles.header}>
                                    <h1 className={styles.name}>{employee.fields.name}</h1>
                                    <span className={styles.position}>
                                        {employee.fields.position && employee.fields.position.map(p => ( <span>{p}</span> ))}
                                    </span>
                                </div>
                            </div>

                        </div>
                    )}
                    <article className="article">
                        <div className={styles.bio}>
                            {employee.fields.body && (
                                <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(employee.fields.body)}} />
                            )}
                        </div>
                    </article>
                </section>
            </Layout>
        );
    }
}

Employee.propTypes = {
    employee: PropTypes.object,
    assets: PropTypes.object,
    location: PropTypes.object
}

function mapStateToProps(state) {
    const employee = state.entries[state.activeEntry];

    const assets = {
        image: employee && state.assets && values(state.assets).find(image => image.sys.id === employee.fields.image.sys.id)
    }

    return {
        employee: employee,
        assets: assets
    }
}

export default connect(mapStateToProps)(Employee);
