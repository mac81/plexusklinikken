import React, { Component, PropTypes } from 'react';

// Components
import EmployeeLink from './EmployeeLink';

// Styles
import styles from './employeeList.scss';

class EmployeeList extends Component {
    render() {
        return (
            <div className={styles.employeeList}>
                <h2 className={styles.employeeListTitle}>{this.props.title}</h2>
                <p className={styles.employeeListSummary}>{this.props.summary}</p>
                <div className={styles.employees}>
                    {this.props.employees && this.props.employees.map(employee => (
                        <EmployeeLink
                            key={employee.sys.id}
                            id={employee.sys.id}
                            name={employee.fields.name}
                            position={employee.fields.position}
                            summary={employee.fields.summary}
                            image={employee.fields.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

EmployeeList.propTypes = {
    employees: PropTypes.array
}

export default EmployeeList;
