def calculate():
        graph = {}
        graph['Argentina'] = [ ['Paraguai', 1042], ['Bolivia', 2236], ['Chile', 1138], ['Uruguai', 206]]
        graph['Uruguai'] = [['Brasil', 2280], ['Argentina', 206]]
        graph['Chile'] = [['Peru', 2466], ['Bolivia', 1902], ['Argentina', 1138]]
        graph['Bolivia'] = [['Brasil', 2162], ['Paraguai', 1466], ['Peru', 1081], ['Chile', 1902], ['Argentina', 2236]]
        graph['Peru'] = [['Brasil', 3172], ['Colombia', 1892], ['Ecuador', 1329], ['Bolivia', 1081], ['Chile', 2466], ['Argentina', 3138]]
        graph['Ecuador'] = [['Colombia', 731], ['Peru', 1329]]
        graph['Colombia'] = [['Brasil', 3675], ['Venezuela', 1018], ['Ecuador', 731], ['Peru', 1892]]
        graph['Venezuela'] = [['Brasil', 3595], ['Guiana', 1045], ['Colombia', 1018]]
        graph['Guiana'] = [['Brasil', 2756], ['Suriname', 343], ['Venezuela', 1045]]
        graph['Suriname'] = [['Brasil', 2539], ['Guiana Francesa', 337], ['Guiana', 343]]
        graph['Guiana Francesa'] = [['Brasil', 2355], ['Suriname', 337]]
        graph['Paraguai'] = [['Brasil', 1458], ['Bolivia', 1466], ['Argentina', 1042]]
        graph['Brasil'] = [['Uruguai', 2280], ['Paraguai', 1458], ['Bolivia', 2162], ['Peru', 3172], ['Colombia', 3675], ['Venezuela', 3595], ['Guiana', 2756], ['Suriname', 2539], ['Guiana Francesa', 2355]]
        
        src = 'Brasil'
        target = 'Colombia'

        dist = collections.defaultdict(lambda: float('infinity'))
        dist[src] = 0
        prev = {}
        
        for _ in range(14):
            _dist = dist.copy()
            
            for s in graph:
                for e, w in graph[s]:
                    if _dist[e] > dist[s] + w:
                        _dist[e] = dist[s] + w
                        prev[e] = s
                    
            dist = _dist

        result = []
        key = target
        
        while key in prev:
            result.append(prev[key])
            key = prev[key]
        
        return [dist[target], result]