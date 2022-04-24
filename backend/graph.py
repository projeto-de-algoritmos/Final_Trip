def calculate():
        graph = {}
        graph['Argentina'] = [['Brasilia', 2340], ['Paraguai', 1042], ['Guiana Francesa', 4447], ['Suriname', 4440], ['Guiana', 4470], ['Venezuela', 5093], ['Colombia', 4671], ['Ecuador', 4360], ['Peru', 3138], ['Bolivia', 2236], ['Chile', 1138], ['Uruguai', 206]]
        graph['Uruguai'] = [['Brasilia', 2280], ['Paraguai', 1081], ['Guiana Francesa', 4447], ['Suriname', 4440], ['Guiana', 4450], ['Venezuela', 5172], ['Colombia', 4787], ['Ecuador', 4502], ['Peru', 3300], ['Bolivia', 2368], ['Chile', 1342], ['Argentina', 206]]
        graph['Chile'] = [['Brasilia', 3011], ['Paraguai', 1558], ['Guiana Francesa', 4682], ['Suriname', 4640], ['Guiana', 4665], ['Venezuela', 4900], ['Colombia', 4258], ['Ecuador', 2139], ['Peru', 2466], ['Bolivia', 1902], ['Uruguai', 1342], ['Argentina', 1138]]
        graph['Bolivia'] = [['Brasilia', 2162], ['Paraguai', 1466], ['Guiana Francesa', 2948], ['Suriname', 2862], ['Guiana', 2862], ['Venezuela', 3002], ['Colombia', 2447], ['Ecuador', 2139], ['Peru', 1081], ['Chile', 1902], ['Uruguai', 2368], ['Argentina', 2236]]
        graph['Peru'] = [['Brasilia', 3172], ['Paraguai', 2518], ['Guiana Francesa', 3322], ['Suriname', 2746], ['Guiana', 2959], ['Venezuela', 3002], ['Colombia', 1892], ['Ecuador', 1329], ['Bolivia', 1081], ['Chile', 2466], ['Uruguai', 3300], ['Argentina', 3138]]
        graph['Ecuador'] = [['Brasilia', 3779], ['Paraguai', 3580], ['Guiana Francesa', 2960], ['Suriname', 2668], ['Guiana', 2746], ['Venezuela', 1744], ['Colombia', 731], ['Peru', 1329], ['Bolivia', 2139], ['Chile', 2139], ['Uruguai', 4502], ['Argentina', 4360]]
        graph['Colombia'] = [['Brasilia', 3675], ['Paraguai', 3780], ['Guiana Francesa', 2411], ['Suriname', 2093], ['Guiana', 1776], ['Venezuela', 1018], ['Ecuador', 731], ['Peru', 1892], ['Bolivia', 2447], ['Chile', 4258], ['Uruguai', 4787], ['Argentina', 4671]]
        graph['Venezuela'] = [['Brasilia', 3595], ['Paraguai', 4101], ['Guiana Francesa', 1722], ['Suriname', 1387] ,['Guiana', 1045], ['Colombia', 1018], ['Ecuador', 1744], ['Peru', 3002], ['Bolivia', 3002], ['Chile', 4900], ['Uruguai', 5172], ['Argentina', 5093]]
        graph['Guiana'] = [['Brasilia', 2756], ['Paraguai', 3566], ['Guiana Francesa', 680], ['Suriname', 343], ['Venezuela', 1045], ['Colombia', 1776], ['Ecuador', 2746], ['Peru', 2959], ['Bolivia', 2862], ['Chile', 4665], ['Uruguai', 4450], ['Argentina', 4470]]
        graph['Suriname'] = [['Brasilia', 2539], ['Paraguai', 2539], ['Guiana Francesa', 337], ['Guiana', 343], ['Venezuela', 1387], ['Colombia', 2093], ['Ecuador', 2668], ['Peru', 2746], ['Bolivia', 2862], ['Chile', 4640], ['Uruguai', 4440], ['Argentina', 4440]]
        graph['Guiana Francesa'] = [['Brasilia', 2355], ['Paraguai', 3405], ['Suriname', 337], ['Guiana', 680], ['Venezuela', 1722], ['Colombia', 2411], ['Ecuador', 2960], ['Peru', 3322], ['Bolivia', 2948], ['Chile', 4682], ['Uruguai', 4447], ['Argentina', 4447]]
        graph['Paraguai'] = [['Brasilia', 1458], ['Guiana Francesa', 3405], ['Suriname', 2539], ['Guiana', 3566], ['Venezuela', 4101], ['Colombia', 3780], ['Ecuador', 3580], ['Peru', 2518], ['Bolivia', 1466], ['Chile', 1558], ['Uruguai', 1081], ['Argentina', 1042]]
        graph['Brasilia'] = [['Uruguai', 2280], ['Argentina', 2340], ['Paraguai', 1458], ['Chile', 3011], ['Bolivia', 2162], ['Peru', 3172], ['Ecuador', 3779], ['Colombia', 3675], ['Venezuela', 3595], ['Guiana', 2756], ['Suriname', 2539], ['Guiana Francesa', 2355]]
        
        src = 'Brasilia'
        target = 'Colombia'

        dist = collections.defaultdict(lambda: float('infinity'))
        dist[src] = 0
        prev = {}
        
        for _ in range(14):
            _dist = dist.copy()
            
            for s in graph:
                for e, w in graph[s]:
                    if s == src and e == target: continue 

                    if _dist[e] > dist[s] + w:
                        _dist[e] = dist[s] + w
                        prev[e] = s
                    
            dist = _dist

        result = []
        key = target
        
        while key in prev:
            result.append(prev[key])
            key = prev[key]
        
        if dist[target] == float('infinity'): return -1
        return [dist[target], result]