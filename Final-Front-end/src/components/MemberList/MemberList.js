import React, {useState, useEffect} from 'react';
import groupStudyService from '../../services/groupStudyService';




const MemberList = ({studyId}) => {


    const [follow, setFollow] = useState("");
    const [people, setPeople] = useState(["null","null"]);

    const toggleFollow = (isFollow) => {
        return isFollow ? false : true
    }

    useEffect(() => {
        (async () => {
            const res = await groupStudyService.getStudyMemberList(studyId);
            //console.log("리스트작동",res);
            setPeople(res.data);
 
        })();
      }, []);

    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        닉네임
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        거주지역
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        전화번호
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {people.map((person,keys) => (
                                    <tr key={keys}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">                                        
                                            <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{person?.member_nickname}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{person?.member_loc}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{person?.member_phonenumber}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => setFollow(toggleFollow(follow))}>
                                            {follow ? 'UnFollow' : 'Follow'}
                                        </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberList;