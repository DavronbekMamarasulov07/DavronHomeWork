import React from 'react'
import { users } from '../../db/data'
import "./UserTable.css"

const UserTable = () => {
    return (
        <div>
            <div className="container">
                <div className="user-content">
                    <h1>Users-Table <span>(scroll)</span></h1>
                    <div className="user-table-content">
                        <table>
                            <thead>

                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>address-street</th>
                                    <th>address-suite</th>
                                    <th>address-geo-let</th>
                                    <th>address-geo-lng</th>
                                    <th>phone</th>
                                    <th>website</th>
                                    <th>company-name</th>
                                    <th>company-catchPhrase</th>
                                    <th>company-bs</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user =>
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}</td>
                                            <td>{user.address.suite}</td>
                                            <td>{user.address.geo.lat}</td>
                                            <td>{user.address.geo.lng}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.website}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.company.catchPhrase}</td>
                                            <td>{user.company.bs}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTable
