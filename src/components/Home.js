import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1 className="home--logo">Вкусные рецепты</h1>

            <h2 className="home--title">Запеченный лосось</h2>
            <p className="home--desc">
                <ol>Лосось</ol>
                <ol>Кедровые орешки</ol>
                <ol> Butter Lettuce</ol>
                <ol> Кабачки</ol>
                <ol> Оливковое масло</ol>
                <ol> Чеснок</ol>
            </p>

            <h2 className="home--title">Инструкция по приготовлению</h2>
            <p className="home--desc">
                <ol>Разогрейте духовку до 350 градусов.,</ol>
                <ol>Намажьте оливковым маслом стеклянную форму для запекания,</ol>
                <ol>Добавьте в блюдо лосось, чеснок и кедровые орехи,</ol>
                <ol> Выпекать 15 мин.,</ol>
                <ol>Добавьте желтую тыкву и снова поставьте в духовку на 30 минут,</ol>
                <ol>Достаньте из духовки и дайте остыть в течение 15 минут. Добавьте салат и подавайте на стол.</ol>
            </p>

            <h2 className="home--title">Рыбный такос</h2>

            <p className="home--desc">
                <ol>Сиг</ol>
                <ol>Сыр</ol>
                <ol>Салат Айсбер</ol>
                <ol>Томаты</ol>
                <ol> Лепешки</ol>
            </p>

            <h2 className="home--title">Инструкция по приготовлению</h2>
            <p className="home-desc">
                <ol> Готовить рыбу на гриле до горячего состояния,</ol>
                <ol> Положите рыбу на 3 лепешки.,</ol>
                <ol>Посыпьте их салатом, помидорами и сыром.</ol>
            </p>

        </div>
    );
};

export default Home;