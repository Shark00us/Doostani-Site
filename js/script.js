document.addEventListener("DOMContentLoaded", function ()
{
    const observer =
        new IntersectionObserver(
            function (entries)
            {
                entries.forEach(function (entry)
                {
                    if (entry.isIntersecting)
                    {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.15
            });

    document
        .querySelectorAll(".section, .feature-card, details")
        .forEach(function (element)
        {
            element.classList.add("hidden");
            observer.observe(element);
        });

    const details =
        document.querySelectorAll("details");

    details.forEach(function (detail)
    {
        detail.addEventListener(
            "toggle",
            function ()
            {
                if (!detail.open)
                {
                    return;
                }

                details.forEach(function (other)
                {
                    if (other !== detail)
                    {
                        other.open = false;
                    }
                });
            });
    });

    const button =
        document.querySelector(".button");

    if (button)
    {
        button.addEventListener(
            "click",
            function ()
            {
                document
                    .getElementById("intro")
                    .scrollIntoView(
                    {
                        behavior: "smooth"
                    });
            });
    }

    const progress =
        document.createElement("div");

    progress.id = "scrollProgress";

    document.body.appendChild(progress);

    window.addEventListener(
        "scroll",
        function ()
        {
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percent =
                window.scrollY / height * 100;

            progress.style.width =
                percent + "%";
        });

    const topButton =
        document.createElement("button");

    topButton.id = "topButton";
    topButton.innerHTML = "▲";

    document.body.appendChild(topButton);

    topButton.addEventListener(
        "click",
        function ()
        {
            window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            });
        });

    window.addEventListener(
        "scroll",
        function ()
        {
            if (window.scrollY > 600)
            {
                topButton.classList.add("show");
            }
            else
            {
                topButton.classList.remove("show");
            }
        });
});