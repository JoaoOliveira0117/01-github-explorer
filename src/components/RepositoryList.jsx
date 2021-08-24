const repositoryName = 'unform2';

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in ReactJS</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in ReactJS</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in ReactJS</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in ReactJS</p>

                    <a href="">
                        Acessar Repositorio
                    </a>
                </li>
            </ul>
        </section>
    );
};