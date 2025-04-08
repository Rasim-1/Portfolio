
import React, { useState, useEffect } from 'react';
import s from './Works.module.scss';
import Top from '../../ui/Top/Top';
import Card from '../../ui/Card/Card';

const Works = () => {
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/db.json')
            .then(response => {
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                return response.json();
            })
            .then(data => {
                setProjects(data.projects); // Берём из `projects`, если в `db.json` объекты внутри `projects`
                setTotalProjects(data.projects.length);
                setLoading(false);
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className={s.works}>
            <div className="container">
                <Top title={'Projects'} count={totalProjects} />
                {loading ? (
                    <div className={s.loader}>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    <div className={s.wrap}>
                        <div className={s.grid}>
                            {projects.map((card) => (
                                <Card
                                    key={card.id}
                                    image={card.image}
                                    name={card.name}
                                    link={card.link}
                                    description={card.description}
                                    technologies={card.technologies}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Works;
