

export const HeaderApp = () => {
    return (
        <header className="header-app-top fixed-top bg-light">
            <div className="container header-app-top-container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        {/* menu hamburger */}
                        <button className="btn btn-light">
                            <i className="fas fa-bars"></i>
                             Menu
                        </button>
                    </div>
                    <div className="col-md-8">
                        <div className="row justify-content-end">
                            {/* search */}
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Search"/>
                                 <button className="btn btn-light">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                            {/* botoes de trocas em andamento, meus anúncios, notificações e favoritos */}]
                             <div className="col-md-4">
                                <div className="row justify-content-end">
                                    <div className="col-md-3">
                                        <button className="btn btn-light">
                                            <i className="fas fa-exchange-alt"></i>
                                            Em andamento
                                        </button>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn btn-light">
                                            <i className="fas fa-bullhorn"></i>
                                            Anúncios
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-light">
                                        <i className="fas fa-bell"></i>
                                        Notificações
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-light">
                                        <i className="fas fa-heart"></i>
                                        Favoritos
                                    </button>
                                </div>
                            </div>
                        </div>
                            {/* login e cadastro */}
                        <div className="col-md-4">
                            <div className="row justify-content-end">
                                <div className="col-md-6">
                                    <button className="btn btn-light">
                                        <i className="fas fa-user"></i>
                                        Entrar
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-light">
                                        <i className="fas fa-user-plus"></i>
                                        Crie sua Conta
                                    </button>       
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
};