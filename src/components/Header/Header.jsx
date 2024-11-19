import React from "react"
import './Header.css'


export default function Header(){
    return(
    <section className="Sectionbg">
    <div className="Grid">
        <div className="Backspace">
        <a href="/blog" class="bg-back-button w-inline-block">
            <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62c66acf2cd0136d63696d8e_chevron-left-g-700.svg" loading="lazy" width="24" height="24" alt=""></img>
            <div class="h6">Articles</div>
        </a>
        </div>
        <div className="Content">
            <div className="image">
            <img src="https://cdn.prod.website-files.com/628f057680c7be295881d6c7/64996d9ae23cd9444ea08eb1_OPD%20Coverage_%20Comprehensive%20Healthcare%20Benefits%20for%20Employees.png" className="contentimg"></img>
            </div>
            <div className="writeup">
                <div className="blogtime">
                    <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62c6715d2cd0134335698b40_blog-time-icon.svg"></img>
                    <div>
                        <span time-to-read=".blog-rich-text">6</span> min read
                    </div>
                </div>
            <h1 class="text-b0 t-bold">What is OPD Coverage? How to get Comprehensive Healthcare Benefits for your employees</h1>
            <div className="author">
                <a href="https://www.novabenefits.com/blog-author/sanyukta-iyer" className="authorName">
                <img src="https://cdn.prod.website-files.com/628f057680c7be295881d6c7/64b7f80e5c16a9719ff0d64c_Sanyukta%201-1.png" className="authorimg"></img>
                <div class="text-b5">Sanyukta Iyer</div>
                </a>
            </div>
            </div>
        </div>
    </div>
    </section>
    )
}

