import React, { useEffect } from 'react';
import { Projects } from '../components/Projects';

export const ProjectsPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <Projects />
        </div>
    );
};
