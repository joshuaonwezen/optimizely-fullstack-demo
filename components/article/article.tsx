import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Article = () => {
    return (
        <article>
            <h1>Optimizely Full Stack</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pulvinar elementum integer enim neque volutpat ac tincidunt.
                Convallis tellus id interdum velit laoreet id donec ultrices.
                Sed enim ut sem viverra aliquet eget sit amet. Fermentum iaculis
                eu non diam phasellus vestibulum lorem sed risus. Interdum velit
                euismod in pellentesque. Cras adipiscing enim eu turpis egestas
                pretium aenean. Egestas erat imperdiet sed euismod nisi porta
                lorem. Nam libero justo laoreet sit amet cursus sit. Elit at
                imperdiet dui accumsan sit amet nulla. Dui accumsan sit amet
                nulla facilisi morbi tempus. Feugiat in fermentum posuere urna
                nec tincidunt. Aliquam eleifend mi in nulla. Etiam sit amet nisl
                purus in. Tincidunt nunc pulvinar sapien et. Mauris augue neque
                gravida in fermentum et. Ut pharetra sit amet aliquam id diam
                maecenas ultricies mi. At augue eget arcu dictum. Feugiat in
                ante metus dictum at tempor commodo. Elementum sagittis vitae et
                leo duis. Euismod elementum nisi quis eleifend quam adipiscing
                vitae. Nullam vehicula ipsum a arcu cursus vitae. Venenatis a
                condimentum vitae sapien pellentesque habitant. Tortor at auctor
                urna nunc id cursus. Consectetur lorem donec massa sapien
                faucibus et molestie. Malesuada fames ac turpis egestas maecenas
                pharetra. Est ullamcorper eget nulla facilisi. Purus ut faucibus
                pulvinar elementum integer enim neque volutpat. Faucibus
                interdum posuere lorem ipsum dolor sit amet consectetur.
                Interdum varius sit amet mattis vulputate. Platea dictumst
                quisque sagittis purus sit amet volutpat consequat. Nisl pretium
                fusce id velit. Molestie at elementum eu facilisis sed odio
                morbi. Leo duis ut diam quam nulla. Dictumst vestibulum rhoncus
                est pellentesque elit ullamcorper dignissim. Et molestie ac
                feugiat sed lectus vestibulum. At urna condimentum mattis
                pellentesque id nibh tortor. Blandit libero volutpat sed cras
                ornare arcu dui vivamus. Purus ut faucibus pulvinar elementum
                integer. Orci sagittis eu volutpat odio facilisis mauris. In
                ornare quam viverra orci sagittis eu volutpat odio facilisis.
                Rhoncus urna neque viverra justo nec ultrices dui sapien eget.
                Dui vivamus arcu felis bibendum. Id nibh tortor id aliquet
                lectus proin nibh nisl condimentum. Nisl pretium fusce id velit
                ut tortor pretium. Diam maecenas ultricies mi eget mauris
                pharetra et ultrices neque. Mi sit amet mauris commodo quis. Sed
                viverra tellus in hac habitasse platea. Pulvinar mattis nunc sed
                blandit libero volutpat. Ligula ullamcorper malesuada proin
                libero nunc. Scelerisque eu ultrices vitae auctor eu augue ut
                lectus arcu. Nisl nunc mi ipsum faucibus vitae aliquet nec
                ullamcorper sit. Leo vel fringilla est ullamcorper eget nulla
                facilisi etiam. Semper auctor neque vitae tempus quam
                pellentesque nec nam. Eget sit amet tellus cras adipiscing enim.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames. Cursus sit amet dictum sit. Porta lorem mollis
                aliquam ut porttitor leo a diam sollicitudin. Scelerisque
                eleifend donec pretium vulputate sapien nec. Eu facilisis sed
                odio morbi. Nunc mi ipsum faucibus vitae aliquet. Nisi
                scelerisque eu ultrices vitae. Arcu ac tortor dignissim
                convallis. Volutpat maecenas volutpat blandit aliquam.
                Sollicitudin ac orci phasellus egestas. Luctus accumsan tortor
                posuere ac ut consequat semper viverra nam. Consectetur
                adipiscing elit ut aliquam. Viverra ipsum nunc aliquet bibendum
                enim. Sed nisi lacus sed viverra. Tristique et egestas quis
                ipsum suspendisse. Posuere urna nec tincidunt praesent semper
                feugiat nibh sed. Orci phasellus egestas tellus rutrum tellus.
            </p>
        </article>
    );
};

export default Article;
