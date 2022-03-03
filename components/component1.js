Vue.component ('component1',{
    template://html
    `

    <table :style="mystyle">
        <tr>
            <td class="array">
                {{array}}
            </td>
            <td class="boolean">
                {{boolean}}            
            </td>
        </tr>
    </table>
    `,
    props: ['array','mystyle','boolean',
    ]
})