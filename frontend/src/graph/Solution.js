import React from 'react';

class Solution {
    static question(start_location, destination) {
        const BR = new Map();
        BR.set('116', ['RS', 'SC', 'PR', 'SP', 'MG', 'BA', 'PE', 'CE']);
        BR.set('101', ['RS', 'SC', 'PR', 'SP', 'RJ', 'ES', 'BA', 'SE', 'AL', 'PE', 'PB', 'RN']);
        BR.set('364', ['AC', 'RO', 'MT', 'GO', 'SP']);
        BR.set('230', ['AM', 'PA', 'MA', 'PI', 'CE', 'PB']);
        BR.set('163', ['SC', 'PR', 'MS', 'MT', 'PA']);
        BR.set('153', ['RS', 'SC', 'PR', 'SP', 'MG', 'GO', 'TO', 'PA']);
        BR.set('158', ['RS', 'SC', 'PR', 'MS', 'GO', 'MT', 'PA']);
        BR.set('174', ['RR', 'AM', 'MT']);
        BR.set('135', ['MA', 'PI', 'BA', 'MG']);
        BR.set('262', ['MS', 'MG', 'ES', 'SP']);

        
        const location = new Map();
        location.set('MG', [116, 153, 135, 262]);
        location.set('BA', [116, 101, 135])
        location.set('PE', [116, 101])
        location.set('CE', [116, 230])
        location.set('SE', [101])
        location.set('AL', [101])
        location.set('PB', [101, 230])
        location.set('TO', [153])
        location.set('MT', [364, 158, 163, 174])
        location.set('AM', [230, 174])
        location.set('RS', [116, 101, 153, 158])
        location.set('SC', [116, 101, 163, 153, 158])
        location.set('PR', [116, 101, 163, 153, 158])
        location.set('SP', [116, 101, 364, 153, 262])
        location.set('ES', [262, 101])
        location.set('RJ', [101])
        location.set('GO', [364, 153, 158])
        location.set('RO', [364])
        location.set('AC', [364])
        location.set('RN', [101])
        location.set('PA', [230, 163, 153, 158])
        location.set('RR', [174])
        location.set('MA', [135, 230])
        location.set('PI', [135, 230])
        location.set('MS', [262, 158, 163])


        const graph = new Map();
        graph.set(116, [262, 230, 135])
        graph.set(101, [262])
        graph.set(364, [174, 163, 158, 153, 262])
        graph.set(230, [174, 163, 158, 153, 135, 116])
        graph.set(163, [230, 364, 262])
        graph.set(153, [158, 230, 364, 262, 158])
        graph.set(158, [153, 364, 262, 230])
        graph.set(174, [230, 364])
        graph.set(135, [230, 116])
        graph.set(262, [116, 101, 364, 163, 153, 158])


        let answer = []
        let visited = new Map();
        
        
        function dfs(node, result) {
            if (location.get(destination).includes(node)) {
                answer.push(result.map((x) => ` BR-${x}`))
                return
            }
            if (visited.has(node)) { return }
            visited.set(node, true)

            if (graph.has(node)) {
                for (const children of graph.get(node)) {
                    result.push(children)
                    dfs(children, result)
                    result.pop()
                }
            }
        }
        
        for (const street of location.get(start_location)) {
            dfs(street, [street])
        }
        
        return this.transformOutput(answer)
    }

    static transformOutput(arr) {
        return arr.map((value, index) => <li>{`Rota ${index + 1}: ${value.toString()}`}</li>);
    }
}

export default Solution;